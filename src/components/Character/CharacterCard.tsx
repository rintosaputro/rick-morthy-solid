import { Component } from "solid-js";
import { Character } from "../../types/character";
import className from "../../utils/className";

interface ICharacterCard {
  character: Character;
}

const CharacterCard: Component<ICharacterCard> = ({ character }) => {
  return (
    <div class="h-auto md:h-[220px] w-full max-w-[400px] md:max-w-[550px] sm:w-[550px] pb-1 md:pb-0 flex flex-col md:flex-row bg-white text-black rounded-lg relative overflow-hidden">
      <div class="h-[97%] md:h-[95%] w-[95%] md:w-[97%] absolute border border-secondary rounded-lg m-auto" />
      <img
        src={character.image}
        class="object-cover h-[300px] md:h-auto lg:ml-[-20px] xl:ml-0"
      />
      <div class="p-4 text-[#3c3e44]">
        <h1 class="font-bold text-xl">{character.name}</h1>
        <div class="text-sm md:text-base font-semibold flex items-center gap-2">
          <div
            class={className("h-2 w-2 rounded-full bg-danger", {
              "bg-success": character.status === "Alive",
            })}
          />{" "}
          {character.status} - {character.species}
        </div>
        <h2 class="mt-3 text-sm md:text-base font-semibold opacity-50">
          Last known location:
        </h2>
        <span class="text-sm md:text-base">{character.location.name}</span>
        <h2 class="mt-3 text-sm md:text-base font-semibold opacity-50">
          First seen in:
        </h2>
        <span class="text-sm md:text-base">{character.origin.name}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
