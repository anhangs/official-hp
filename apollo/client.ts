
// const headers = {
//   "content-type": "application/json",
//   'apollo-require-preflight': "true",
// };
// const requestBody = {
//   operationName: "Query",
//   query: introduction.loc.source.body,
//   variables: {}
// };
// const options: RequestInit = {
//   method: 'POST',
//   headers,
//   body: JSON.stringify(requestBody),
//   // 1. 毎回データを更新する
//   // cache: "no-store",

//   // 2. 定期的にデータの更新を確認しない
//   // cache: "force-cache",

//   // 3. 定期的にデータの更新をする
//   cache: "force-cache",
//   next: { revalidate: 10 }
// };

type Body = {
  operationName: string,
  query: string,
  variables: any
}

/**
 * 1. 毎回データを更新する
 *  cache: "no-store"
 * 2. 定期的にデータの更新を確認しない
 *  cache: "force-cache",
 * 3. 定期的にデータの更新をする
 *  cache: RequestCache
 *  next?: NextFetchRequestConfig | undefined
 */
type Options = {
  body: Body,
  cache?: RequestCache,
  next?: NextFetchRequestConfig | undefined
}

export const request = async <TResponse>(url: string, options: Options): Promise<TResponse> => {
  const response = await fetch(
    url,
    { 
      method: 'POST',
      headers: {
        "content-type": "application/json",
        'apollo-require-preflight': "true",
      },
      body: JSON.stringify(options.body),
      cache: options.cache,
      next: options.next
    }
    );
  return (await response.json() as any).data as TResponse;
}