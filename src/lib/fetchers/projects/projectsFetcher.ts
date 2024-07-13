import { httpHeadersContentType, httpMethods } from "@/lib/constants";

type SearchParams = Record<string, string | undefined>

export const projectsFetcher = async (
  url: string,
  searchParams?: SearchParams
) => {
  const filteredParams = removeUndefined(searchParams || {})
  const params = new URLSearchParams(filteredParams)
  const urlWithParams = `${url}/?${params.toString()}`;
  console.log({ urlWithParams })
  const response = await fetch(urlWithParams, {
    method: httpMethods.GET,
    headers: {
      "Content-Type": httpHeadersContentType.json,
    },
  });
  const data = await response.json();
  console.log({ data }, data.errors);
  return data.data;
};


function removeUndefined(obj: SearchParams): Record<string, string> {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v)) as unknown as Record<string, string>
}
