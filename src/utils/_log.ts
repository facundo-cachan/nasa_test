export default (txt: string, obj: any) =>
  console.log(txt, JSON.stringify(obj, null, 2));