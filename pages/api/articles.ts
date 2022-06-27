import useSWR from "swr";

const useArticles = (option: string) => {
    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data, error } = useSWR(
        `https://api.nytimes.com/svc/mostpopular/v2/${option}/7.json?api-key=NmBLzxoJwcIc3Em8gjPb0BPZya4Nwm0z`,
        fetcher
    );
    return { data, error }
};

export default useArticles;
