import GeneralProjectList from "../components/generalProjectList";

const ProjectPage = () => {
    return (
        <section className="projectPage">
            <div className="pp_a_t">
                <h1>Aktív Projektjeink</h1>
            </div>
            <div className="projectList">
                <GeneralProjectList />
            </div>
        </section>
    );
};

export default ProjectPage;