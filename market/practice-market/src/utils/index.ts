//feter함수
//각 API클라이언트는 정의한 fetcher 함수를 사용해 요청을 보내고 이 함수는 fetch 함수로 요청을 전송한다.
export const fetcher = async (
    resource: RequestInfo,
    init?: RequestInit
  ): Promise<any> => {
    const res = await fetch(resource, init);

    if(!res.ok){
        const errorRes = await res.json();
        const error = new Error(
            errorRes.message ?? 'API 요청 중에 에러가 발생했습니다.',
        );

        throw error;
    }

    return res.json();
  }