import { ApiContext, User} from 'types';

import { fetcher } from 'utils';

export type SigninParams = {
    username: string;
    password: string;
}
/**
 * 인증 API(로그인)
 * @param params 로그인에 필요한 정보(아이디, 비밀번호)
 * @returns 로그인한 사용자 정보
 */
const signin = async (
    context: ApiContext,
    params: SigninParams
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,'')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    )
}

export default signin;