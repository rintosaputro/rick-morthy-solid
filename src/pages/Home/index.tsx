import {
  Accessor,
  createResource,
  For,
  Match,
  Suspense,
  Switch,
} from "solid-js";
import { fetchCharacters } from "../../utils/api";
import SkeletonCharacterCard from "../../components/Character/SkeletonCharacterCard";
import { Character } from "../../types/character";
import CharacterCard from "../../components/Character/CharacterCard";

const Home = () => {
  const [character] = createResource("", fetchCharacters);

  return (
    <main>
      <header class="max-h-[700px] h-screen relative flex justify-center items-center">
        <img
          src="/images/rick-morty.png"
          alt="lets go"
          class="w-[250px] md:w-[450px] lg:w-[500px] z-30 md:z-0 h-auto absolute bottom-0 right-0 animate-pulse md:animate-none hover:animate-pulse hover:z-30"
        />
        <h1 class="text-[60px] font-semibold z-20 mx-12 mb-[140px] sm:mb-0">
          <span class="py-1 px-2 border border-success">The Rick</span>
          <span class="bg-white px-2 py-1 text-primary">and Morty</span>
        </h1>
      </header>
      <section class="bg-secondary relative pb-12">
        <div class="p-8 md:p-10 pt-9 z-20 w-full max-w-[2200px] mx-auto">
          <h2 class="font-semibold text-[40px] md:text-[50px]">Creatures</h2>
          <Suspense
            fallback={
              <div>
                <For each={[...Array(10)]}>
                  {() => <SkeletonCharacterCard />}
                </For>
              </div>
            }
          >
            <Switch>
              <Match when={character.error}>
                <p>Server Error!</p>
              </Match>

              <Match when={character()}>
                <div class="flex flex-wrap justify-center gap-7 mt-5 md:mt-7">
                  <For each={character().results}>
                    {(char: Character, index: Accessor<number>) => {
                      if (index() < 6)
                        return <CharacterCard character={char} />;
                    }}
                  </For>
                </div>
              </Match>
            </Switch>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Home;
