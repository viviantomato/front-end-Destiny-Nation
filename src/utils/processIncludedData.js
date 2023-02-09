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
  const cityName = data.attributes.name;

  return data?.attributes?.safety[cityName]
    ? data?.attributes?.safety[cityName]
    : data?.attributes?.safety[countryName];
};

export const getBudget = ({ data, included }) => {
  const countryName = getCountryName(
    data?.relationships?.country?.data?.id,
    included
  );
  const cityName = data.attributes.name;

  return data?.attributes?.budget[cityName]
    ? data?.attributes?.budget[cityName]
    : data?.attributes?.budget[countryName];
};
