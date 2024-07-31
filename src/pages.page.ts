export const layout = "_includes/simple.vto";
const welcome = "Hands-on coaching and advising for product leaders in tech";

export default function* () {
  yield {
    url: "/success/",
    title: "Success",
    content: "Message sent! I'll be in touch shortly.",
  },
  yield {
    url: "/index.html",
    content: welcome,
    mug: true,
    indexable: true,
    description: welcome
  };
}