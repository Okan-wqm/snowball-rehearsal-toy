export function greet(name) {
  return "Hello, " + name + "!";
}

export function shout(name) {
  var loud = name.toUpperCase();
  return loud;
}

export function title(item) {
  return item["title"].trim();
}
