import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function deleteNote() {
    const confirm = window.confirm("Do you really want to delete the note?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchDataNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchDataNotes();
  }, []);

  return (
    <Container>
      <Header />

    {
      data && (
      <main>
        <Content>

          <ButtonText 
            title='Delete the note'
            onClick={deleteNote}
          />

          <h1>{data.title}</h1>

          <p>
            {data.description}
          </p>

          {
            data.links &&
            <Section title="useful Links">
              <Links>
                {
                  data.links.map(link => (
                    <li key={String(link.id)}>

                      <a href={link.url} target="_blank">
                        {link.url} 
                      </a>

                    </li>
                  ))
                }
              </Links>
            </Section>
          }

          {
            data.tags && 
            <Section title="Makers">
              {
                data.tags.map(tag => (
                  <Tag 
                    title={tag.name}
                    key={String(tag.id)} 
                  />
                ))
              }
            </Section>
          }

            <Button title="Return" onClick={handleBack}/>
        

        </Content>
      </main>
      )
    }
    </Container>
  )
}