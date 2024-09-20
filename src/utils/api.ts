export const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name: string) => {
  const res = await fetch(`${BASE_URL}/character?name=${name}`);
  return res.json();
};

export const fetchCharacterById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  return res.json();
};
