export const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
    hoverColor: "#f5f5f5",
    bgColor: "#fff",
    lineColor: "#c6c6c6",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }
  `,
  },
};
