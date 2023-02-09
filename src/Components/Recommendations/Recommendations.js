import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material/";
import { useNavigate } from "react-router-dom";

export function Recommendations() {
  const navigate = useNavigate();

  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          onClick={() => item.id && navigate(`/destination/${item.id}`)}
          sx={{ cursor: "pointer" }}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.city}
            loading="lazy"
          />
          <ImageListItemBar title={item.city} subtitle={item.known} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80",
    city: "Barcelona, Spain",
    rows: 2,
    cols: 2,
    featured: true,
    id: 7831779,
  },
  {
    img: "https://images.unsplash.com/photo-1557409362-fb339d4a0cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    city: "Tokyo, Japan",
    id: "8957779",
    rows: 2,
    cols: 2,
    featured: true,
  },

  {
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",
    city: "Paris, France",
    id: "7879186",
  },
  {
    img: "https://images.unsplash.com/photo-1548623826-a1aa0a4d8a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    city: "Tulum, Mexico",
    cols: 2,
    id: "9317744",
  },
  {
    img: "https://images.unsplash.com/photo-1528275646751-ff237d1cd935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    city: "Arusha, Tanzania",
    id: "10569596",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    city: "Amsterdam, Netherlands",
    cols: 2,
    id: "9661173",
  },

  {
    img: "https://images.unsplash.com/photo-1620571514286-9b65d9ed2be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80",
    city: "Shenzhen, China",
    id: "7002002",
  },
  {
    img: "https://images.unsplash.com/photo-1627391593232-ecc997f1527f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    city: "Bangkok, Thailand",
    id: "10416445",
  },

  {
    img: "https://images.unsplash.com/photo-1535190823090-3c159ed10a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80",
    city: "Marrakesh, Morocco",
    id: "9182683",
  },

  {
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    city: "London, United Kingdom",
    id: 7930952,
  },
];
