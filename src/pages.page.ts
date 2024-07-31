export const layout = "_includes/simple.vto";

export default function* () {
  yield {
    url: "/success/",
    title: "Success",
    content: "Message sent! I'll be in touch shortly.",
  },
  yield {
    url: "/index.html",
    title: "Working Titles",
    mug: true,
    indexable: true,
  };
}