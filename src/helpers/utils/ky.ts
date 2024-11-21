import originalKy from 'ky';

import { IResponseWithPayload } from '@/types';

export const ky = originalKy.extend({
    hooks: {
        beforeRequest: [
            (request, options) => {
                const { url } = request;
                const urlObject = new URL(url);

                const undefinedKeys: string[] = [];

                urlObject.searchParams.forEach((value, key) => {
                    if (value === 'undefined' || value === '') {
                        undefinedKeys.push(key);
                    }
                });

                undefinedKeys.forEach((key) => urlObject.searchParams.delete(key));

                return new Request(urlObject.toJSON(), {
                    method: options.method,
                    body: options.body,
                    headers: request.headers,
                });
            },
        ],
        afterResponse: [
            async (_request, _options, response: IResponseWithPayload) => {
                if (!response.ok) {
                    const responseText = await response.text();

                    try {
                        response.payload = JSON.parse(responseText);
                    } catch {
                        response.payload = responseText;
                    }
                }

                return response;
            },
        ],
    },
});
