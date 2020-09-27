interface IWorkExperience {
    imageUrl: string,
    company: string,
    jobTitle: string,
    location: string,
    dateRange: {
        startDate: {
          month: string,
          year: number
        },
        endDate: {
          month: string,
          year: number
        } | string
    },
    description: React.ReactNode
}

// eslint-disable-next-line no-undef
export default IWorkExperience;
