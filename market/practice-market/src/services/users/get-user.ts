import type { ApiContext, USer } from 'types';

import { fetcher } from 'utils';

export type GetUserParams = {
    id: number;
}

/**
 * 사용자 API(개별 취득)
 * @param params 사용자 취득에 필요한 정보(사용자 ID)
 * @returns 사용자 정보
 */
const getUser = async (
    context: ApiContext,
    { id }: GetUserParams,
): Promise<USer> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,'')}/users/${id}`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    )
}

export default getUser;