/*
|-----------------------------------------
| setting up dataProvider  for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/ 
import queryString from "query-string";
import { fetchUtils, RaRecord } from "react-admin";

const apiUrl = "https://jsonplaceholder.typicode.com";
const httpClient = fetchUtils.fetchJson;

interface GetListParams {
  pagination: { page: number; perPage: number };
  sort: { field: string; order: "ASC" | "DESC" };
  filter: any;
  meta?: any;
  id?: any;
  ids?: any;
  data?: any;
  target?: any;
}
interface GetListResult {
  data: RaRecord[];
  total?: number;
  // if using partial pagination
  pageInfo?: {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
}

const dataProvider = {
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      // sort: JSON.stringify([field, order]),
      // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      _start: JSON.stringify((page - 1) * perPage),
      _end: JSON.stringify((page - 1) * perPage + perPage),
      // filter: JSON.stringify(params.filter),
    };
    let totalCount = 0;
    await fetch(`${apiUrl}/${resource}`)
      .then((res) => res.json())
      .then((d) => (totalCount = d.length));
    const url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
    const { json, headers } = await httpClient(url);

    return {
      data: json,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() ||
          `${totalCount}` ||
          json.length,
        10
      ),
    };
  },

  getOne: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query}`;
    const { json } = await httpClient(url);
    return { data: json };
  },

  getManyReference: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${query}`;
    const { json, headers } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get("content-range")?.split("/").pop() || "", 10),
    };
  },

  create: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  updateMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });
    return { data: json };
  },

  deleteMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },
};
export default dataProvider;
