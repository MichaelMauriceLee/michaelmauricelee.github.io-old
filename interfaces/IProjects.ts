interface IProjects {
    title: string;
    codeUrl: string;
    modalInfo: {
      imageUrl: string;
      description: React.ReactNode;
    }
    cardInfo: {
      imageUrl: string;
      description: string;
    }
    webAppInfo: {
      isWebApp: boolean;
      webAppURL: string | undefined;
    }
}

// eslint-disable-next-line no-undef
export default IProjects;
