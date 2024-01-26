export default function isTextMatched(tag: string, match: string) {
  if (tag !== undefined && match !== "") {
    return tag.toLocaleLowerCase() === match.toLocaleLowerCase();

  }
  return false;
}
