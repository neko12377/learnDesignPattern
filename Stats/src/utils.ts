export const dateStringToDate = (dateString: string) => {
    // 15/10/2020
    const dateParts = dateString
        .split("/")
        .map((value:string): number => {
            return parseInt(value);
        })

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}