import ICarouselItem from '../interfaces/ICarouselItems';

const carouselItems: Array<ICarouselItem> = [
  {
    name: 'Frontend',
    panelItems: [
      {
        name: 'React',
        image: '/images/programming/react.png',
      },
      {
        name: 'Vue',
        image: '/images/programming/vue.png',
      },
    ],
  },
  {
    name: 'Azure',
    panelItems: [
      {
        name: 'Azure Web Apps',
        image: '/images/programming/azure-web-apps.png',
      },
      {
        name: 'Azure Functions',
        image: '/images/programming/azure-functions.png',
      },
      {
        name: 'Cosmos DB',
        image: '/images/programming/cosmosdb.png',
      },
      {
        name: 'Azure SQL Database',
        image: '/images/programming/azure-sql-database.png',
      },
    ],
  },
  {
    name: 'DevOps',
    panelItems: [
      {
        name: 'Terraform',
        image: '/images/programming/terraform.png',
      },
      {
        name: 'Azure DevOps',
        image: '/images/programming/azure-devops.png',
      },
      {
        name: 'GitHub Actions',
        image: '/images/programming/github-actions.png',
      },
    ],
  },
  {
    name: 'Backend',
    panelItems: [
      {
        name: 'Java',
        image: '/images/programming/java.png',
      },
      {
        name: 'Python',
        image: '/images/programming/python.png',
      },
      {
        name: 'C#',
        image: '/images/programming/csharp.png',
      },
    ],
  },
];

export default carouselItems;
