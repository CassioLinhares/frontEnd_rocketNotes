import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function New() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleBack() {
        navigate(-1);
    }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Fill in the title field");
        }
        if (newLink) {
            const fieldLink = confirm("You left a link in the field to add, want to add?");
            return fieldLink ? handleAddLink() : setNewLink("");
        }
        if (newTag) {
            const fieldTag = confirm("You left a tag in the field to add, want to add?");
            return fieldTag ? handleAddTag() : setNewTag("");
        }
       
        await api.post("/notes", {
            title,
            description,
            links,
            tags
        });
        alert("Successfully created note!");
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <ButtonText title="Return" onClick={handleBack} />
                    </header>

                    <Input 
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea 
                        placeholder="Remark" 
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Useful links">
                        <NoteItem
                            isNew
                            placeholder="New links"
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}// necessary in list elements
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                    </Section>

                    <Section title="Makers">
                        <div className="tag">
                            <NoteItem
                                isNew
                                placeholder="New tags"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />

                              {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                        </div>
                    </Section>


                    <Button title="Save" onClick={handleNewNote} />

                </Form>
            </main>
        </Container>
    );
}

