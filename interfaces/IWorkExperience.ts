interface IWorkExperience {
    imageUrl: string,
    company: string,
    jobTitle: string,
    location: string,
    dateRange: {
      startDate: string,
      endDate: string
    },
    description: Array<string>,
    achievements: Array<string> | null
}

// eslint-disable-next-line no-undef
export default IWorkExperience;
