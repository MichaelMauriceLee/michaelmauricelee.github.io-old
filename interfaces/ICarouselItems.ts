interface ICarouselPanelItem {
  name: string,
  image: string,
}

interface ICarouselItem {
  name: string,
  panelItems: Array<ICarouselPanelItem>
}

// eslint-disable-next-line no-undef
export default ICarouselItem;
