import sanitizeHtml from "sanitize-html";

const setSanitize = (post: string) => {
  const allowedTags = [
    "h3",
    "h4",
    "h5",
    "img",
    "iframe",
    "em",
    "s",
    "strong",
    "blockquote",
    "span",
    "pre",
    "ol",
    "li",
    "ul",
    "a",
    "p",
    "br",
    "u",
    "input",
  ];
  const allowedAttributes = {
    img: ["src"],
    iframe: ["src"],
    span: ["style", "color", "background-color"],
    em: ["style", "color", "background-color"],
    u: ["style", "color", "background-color"],
    s: ["style", "color", "background-color"],
    strong: ["style", "color", "background-color"],
    blockquote: ["style", "color", "background-color"],
    pre: ["style", "color", "background-color", "class", "spellcheck"],
    ol: ["style", "color", "background-color"],
    li: ["style", "color", "background-color"],
    ul: ["style", "color", "background-color"],
    p: ["style", "color", "background-color"],
    input: ["style", "color", "background-color"],
    a: ["style", "color", "background-color", "rel", "target", "href"],
  };
  const sanitizedContent = sanitizeHtml(post, {
    allowedTags,
    allowedAttributes,
  });

  return sanitizedContent;
};

export default setSanitize;
