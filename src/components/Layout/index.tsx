import { A } from "@solidjs/router";
import { For, type Component, type JSX } from "solid-js";
import { AiFillGithub } from "solid-icons/ai";
import { BiLogosGmail } from "solid-icons/bi";

interface LayoutProps {
  children?: JSX.Element;
}

const anchors = [
  { href: "/character", title: "Character" },
  { href: "/location", title: "Location" },
  { href: "/episode", title: "Episode" },
];

const Layout: Component<LayoutProps> = (props) => (
  <div class="bg-[#171d68] min-h-screen w-full text-white font-Blinker relative">
    <nav class="flex items-center p-4 md:p-8 pt-4 absolute top-0 z-10 w-full">
      <A href="/">
        <img
          src="/images/logo.png"
          alt="rick & morty"
          class="w-[100px] h-auto"
        />
      </A>
      <div class="flex gap-2 md:gap-9 justify-end md:justify-center w-full">
        <For each={anchors}>
          {(item) => (
            <A
              href={item.href}
              class="text-xs sm:text-base py-1 px-2 md:px-4 border border-white transition ease-in-out delay-150 rotate-0 hover:-translate-y-1 hover:scale-100 hover:bg-secondary hover:font-semibold hover:-rotate-3 hover:border-none duration-200"
            >
              {item.title}
            </A>
          )}
        </For>
      </div>
    </nav>
    {props.children}
    <footer class="bg-[#202329] w-full py-12">
      <div class="flex gap-6 justify-center">
        <div class="flex items-center gap-3">
          <img
            src="/images/solid.svg"
            alt="solid"
            class="w-11 md:w-14 h-auto"
          />
          <div>
            <div class="text-[9px] opacity-75">Powered by</div>
            <div class="font-semibold">Solid JS</div>
          </div>
        </div>
        <div class="flex items-center gap-0">
          <img src="/images/logo.png" alt="solid" class="w-20 md:w-24 h-auto" />
          <div>
            <div class="text-[9px] opacity-75">Data provided by</div>
            <A
              href="https://rickandmortyapi.com/"
              target="__blank"
              class="font-semibold"
            >
              rick morty api
            </A>
          </div>
        </div>
      </div>
      <ul class="flex gap-4 justify-center mt-8">
        <li>
          <A
            target="__blank"
            href="https://github.com/rintosaputro"
            class="opacity-55 hover:opacity-100"
          >
            <AiFillGithub class="text-[16px] md:text-[30px]" />
          </A>
        </li>
        <li>
          <a
            href="mailto:saputrorinto@gmail.com"
            class="opacity-55 hover:opacity-100"
          >
            <BiLogosGmail class="text-[16px] md:text-[30px]" />
          </a>
        </li>
      </ul>
      <div class="flex gap-1 justify-center items-center mt-8">
        <span class="opacity-55 text-sm">❮❯ by</span>
        <A
          target="__blank"
          href="https://github.com/rintosaputro"
          class="hover:opacity-50 font-semibold text-secondary hover:text-white underline decoration-primary"
        >
          Rinto Saputro
        </A>
        <span class="opacity-55 text-sm">2024</span>
      </div>
    </footer>
  </div>
);

export default Layout;
