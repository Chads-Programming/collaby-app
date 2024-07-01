import { httpHeadersContentType, httpMethods } from "@/lib/constants";

export const projectsFetcher = async (
	url: string,
	searchParams?: Record<string, string>,
) => {
	const params = new URLSearchParams(searchParams);
	const urlWithParams = `${url}/?${params.toString()}`;
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
