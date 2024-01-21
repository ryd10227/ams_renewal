import axios, { AxiosError } from "axios";

const selectedCategoryProp = (selectedCategory: string) => {
    switch (selectedCategory) {
        case '전체':
            return { endPoint: '', itemIndex: 'assetidx' };
        case '하드웨어':
            return { endPoint: '/hardware', itemIndex: 'hwidx' };
        case '소프트웨어':
            return { endPoint: '/software', itemIndex: 'swidx' };
        default:
            return { endPoint: '', itemIndex: 'assetidx' };
    }
}

export const getQuery = async (selectedCategory: string, displayedDataList) => {
    const endpointData = selectedCategoryProp(selectedCategory);
    try {
        const res = await axios.get(`${process.env.VUE_APP_BASE_URL}/assets${endpointData.endPoint}s`);
        displayedDataList.value = res.data;
    } catch (err) {
        const error = err as AxiosError;
        console.error(error);
    }
};

export const deleteQuery = async (selectedCategory: string, selectedItems) => {
    const endpointData = selectedCategoryProp(selectedCategory);
    if (selectedItems.length > 0) {
        try {
            const idxValue = parseInt(selectedItems[0][endpointData.itemIndex]);
            await axios.delete(`${process.env.VUE_APP_BASE_URL}/assets${endpointData.endPoint}`, { params: { idx: idxValue } });
        } catch (err) {
            const error = err as AxiosError;
            console.error(error);
        }
    }
};

export const postQuery = async (selectedCategory: string, dataToSend: object) => {
    const endpointData = selectedCategoryProp(selectedCategory);
    try {
        await axios.post(`${process.env.VUE_APP_BASE_URL}/assets${endpointData.endPoint}`, dataToSend);
    } catch (err) {
        const error = err as AxiosError;
        console.error(error);
    }
};