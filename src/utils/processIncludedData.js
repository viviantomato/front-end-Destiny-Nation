export const getListOfKnownFor = (id, data) => {
  const knownFor = data.find(
    (datum) => datum.id === id && datum.type === "known_for"
  );
  return {
    name: knownFor?.attributes?.name ?? "",
    url: knownFor?.attributes?.icon + "-96.png",
  };
};

export const getImageUrl = (id, data) => {
  const image = data.find((datum) => datum.id === id && datum.type === "photo");
  return image?.attributes?.image?.full ?? "";
};

const getCountryName = (id, data) => {
  console.log("countryName", id, data);

  const country = data.find(
    (datum) => datum.id === id && datum.type === "destination"
  );
  return country?.attributes?.name ?? "";
};

export const getCovidScore = ({ data, included }) => {
  const countryName = getCountryName(
    data?.relationships?.country?.data?.id,
    included
  );
  return data?.attributes?.covid[countryName]?.text;
};

export const getSafetyScore = ({ data, included }) => {
  const countryName = getCountryName(
    data?.relationships?.country?.data?.id,
    included
  );
  return data?.attributes?.safety[countryName];
};
