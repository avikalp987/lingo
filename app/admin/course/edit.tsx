import { Create, Datagrid, Edit, List, NumberInput, SimpleForm, TextField, TextInput, required } from "react-admin"

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Title"/>
                <TextInput source="imageSrc" validate={[required()]} label="Image"/>
                <NumberInput source="id" validate={[required()]} label="Id"/>
            </SimpleForm>
        </Edit>
    )
}