export default function useHttp(url, opt = {}) {
    return useFetch(url, {
            ...opt,
        }
    )
}
