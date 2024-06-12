import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ParticipantList from "../../components/ParticipantList";
import Form from "../../components/form";

export default function Settings() {
    return (
        <Card>
            <section>
                <h2>{'Vamo começar'}</h2>
                <Form />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}