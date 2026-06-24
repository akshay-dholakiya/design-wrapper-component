import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60,
        },
    },
});

const ReactQueryWrapper = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export const useApiQuery = ({
                                queryKey,
                                apiFunction,
                                enabled = true,
                                options = {},
                            }) => {
    return useQuery({
        queryKey,
        queryFn: apiFunction,
        enabled,
        ...options,
    });
};

export default ReactQueryWrapper;