interface IWorkExperience {
    imageUrl: string,
    company: string,
    jobTitle: string,
    location: string,
    dateRange: {
      startDate: string,
      endDate: string
    },
    description: React.ReactNode
}

// eslint-disable-next-line no-undef
export default IWorkExperience;
