import { Create, Datagrid, List, NumberInput, ReferenceInput, SimpleForm, TextField, TextInput, required } from "react-admin"

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Title"/>
                <TextInput source="description" validate={[required()]} label="description"/>
                <ReferenceInput source="courseId" reference="courses"/>
                <NumberInput source="order" validate={[required()]} label="order" />
            </SimpleForm>
        </Create>
    )
}