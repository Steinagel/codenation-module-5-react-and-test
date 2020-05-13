export function isGender(character, gender) {
  return character.gender === gender;
}
export function filterByGender(characters, gender) {
  return characters.filter((character) => isGender(character, gender));
}

export function isAlive(character, status) {
  return character.status === status;
}
export function filterByStatus(characters, status) {
  return characters.filter((character) => isAlive(character, status));
}

export function getEpisodeFromURL(url) {
  const urlSplited = url.split("/");
  return urlSplited[urlSplited.length - 1];
}

export function generateEpisodeList(character) {
  return character.episode.map((url) => getEpisodeFromURL(url));
}

export function mapCharacterToEpisodes(episodes, character) {
  const characterEpisodes = generateEpisodeList(character);
  let newEpisodes = { ...episodes };
  characterEpisodes.map((episode) => {
    if (newEpisodes[episode]) {
      newEpisodes = {
        ...newEpisodes,
        [episode]: [...newEpisodes[episode], character],
      };
      return null;
    }

    newEpisodes[episode] = [character];
    return null;
  });
  return newEpisodes;
}

export function generateEpisodesCharacters(characters) {
  return characters.reduce((episodes, character) => {
    return mapCharacterToEpisodes(episodes, character);
  }, {});
}
