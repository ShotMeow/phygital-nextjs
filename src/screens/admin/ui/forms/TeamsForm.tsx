import { type Dispatch, type FC, type SetStateAction, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Select, TextInput } from "@gravity-ui/uikit";
import { DatePicker } from "@gravity-ui/date-components";
import { dateTimeParse } from "@gravity-ui/date-utils";

import Button from "@/src/shared/ui/Button";
import {
  type TeamFormType,
  type TeamType,
  useCreateTeam,
  useUpdateTeam,
} from "@/src/entities/teams";
import { useGetUsers } from "@/src/entities/users";
import { useGetTournaments } from "@/src/entities/tournaments";
import { API_URL } from "@/src/shared/constants";
import { useNotificationCall } from "../../hooks/useNotificationCall";

interface Props {
  onClose: Dispatch<SetStateAction<boolean>>;
  team?: TeamType;
  type: "create" | "edit";
}

const TeamsForm: FC<Props> = ({ onClose, team, type }) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    handleSubmit,
  } = useForm<TeamFormType>({
    defaultValues: {
      name: team?.name,
      body: team?.body,
      winsPercent: team?.winsPercent,
      gamesCount: team?.gamesCount,
      players: team?.players,
      tournaments: team?.tournaments,
      lastMatch: team?.lastMatch,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(
    team?.logoUrl ? `${API_URL}/images/${team?.logoUrl}` : null,
  );

  const {
    mutate: createTeamMutation,
    isSuccess: isCreateSuccess,
    isError: isCreateError,
  } = useCreateTeam();
  const {
    mutate: updateTeamMutation,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdateTeam();

  useNotificationCall({
    isCreateSuccess,
    isCreateError,
    isUpdateSuccess,
    isUpdateError,
    onClose,
    createText: ["Команда успешно создана", "Ошибка при создании команды"],
    updateText: ["Команда успешно обновлена", "Ошибка при обновлении команды"],
  });

  const { data: players } = useGetUsers({});
  const { data: tournaments } = useGetTournaments({});

  const onSubmit: SubmitHandler<TeamFormType> = (data) => {
    switch (type) {
      case "create":
        createTeamMutation(data);
        break;
      case "edit":
        team &&
          updateTeamMutation({
            id: team.id,
            data,
          });
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h4 className="text-xl font-bold">
        {type === "create"
          ? "Новая команда"
          : `Редактировать команду ${team?.name}`}
      </h4>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Название</span>
        <TextInput
          {...register("name", {
            required: "Название команды не может быть пустым",
          })}
          errorPlacement="inside"
          validationState={errors?.name && "invalid"}
          errorMessage={errors?.name?.message}
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Описание</span>
        <Controller
          render={({ field }) => (
            <MDEditor
              {...field}
              onChange={(value) =>
                setValue("body", String(value), { shouldValidate: true })
              }
            />
          )}
          name="body"
          control={control}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Игроки</span>
        {players && (
          <Controller
            render={({ field: { value, ...field } }) => (
              <Select
                {...field}
                multiple
                filterable
                className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
                popupClassName="text-white"
                defaultValue={value?.map((player) => String(player.id))}
                onUpdate={(value) =>
                  setValue(
                    "players",
                    players.data.filter((player) =>
                      value.includes(String(player.id)),
                    ),
                  )
                }
              >
                {players.data?.map((player) => (
                  <Select.Option value={String(player.id)} key={player.id}>
                    {player.nickname}
                  </Select.Option>
                ))}
              </Select>
            )}
            name="players"
            control={control}
          />
        )}
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Турниры</span>
        {tournaments && (
          <Controller
            render={({ field: { value, ...field } }) => (
              <Select
                {...field}
                multiple
                filterable
                className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
                popupClassName="text-white"
                defaultValue={value?.map((tournament) => String(tournament.id))}
                onUpdate={(value) =>
                  setValue(
                    "tournaments",
                    tournaments.data.filter((tournament) =>
                      value.includes(String(tournament.id)),
                    ),
                  )
                }
              >
                {tournaments.data?.map((tournament) => (
                  <Select.Option
                    value={String(tournament.id)}
                    key={tournament.id}
                  >
                    {tournament.name}
                  </Select.Option>
                ))}
              </Select>
            )}
            name="tournaments"
            control={control}
          />
        )}
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Процент побед</span>
        <TextInput
          {...register("winsPercent", {
            valueAsNumber: true,
          })}
          type="number"
          view="clear"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Количество игр</span>
        <TextInput
          {...register("gamesCount", {
            valueAsNumber: true,
          })}
          view="clear"
          type="number"
          className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Логотип</span>
        <Controller
          render={({ field: { value, onChange, ...field } }) => (
            <input
              {...field}
              onChange={(event) => {
                const file = event.target.files?.[0] as File;
                onChange(file);
                setImageUrl(URL.createObjectURL(file));
              }}
              type="file"
              accept="image/*"
              className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
            />
          )}
          name="imageFile"
          control={control}
        />
        <div className="h-[270px] w-[480px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Предпросмотр логотипа"
              width={480}
              height={270}
              className="size-full rounded-lg object-contain"
            />
          )}
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm/6 font-medium">Дата последнего матча</span>
        <Controller
          render={() => (
            <DatePicker
              onUpdate={(value) =>
                setValue("lastMatch", value?.toDate().toISOString())
              }
              view="clear"
              format="DD.MM.YYYY"
              defaultValue={dateTimeParse(team?.lastMatch)}
              className="rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
            />
          )}
          name="lastMatch"
          control={control}
        />
      </label>
      <div className="mt-4 flex gap-4">
        <Button
          type="button"
          variant="transparent"
          onClick={() => onClose(false)}
        >
          Отмена
        </Button>
        <Button type="submit" variant="more">
          Подтвердить
        </Button>
      </div>
    </form>
  );
};

export default TeamsForm;
