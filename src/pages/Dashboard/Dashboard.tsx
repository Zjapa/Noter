import NoteEditor from "../../components/NoteEditor/NoteEditor";
import NoteOptions from "../../components/NoteOptions/NoteOptions";
import NotePanel from "../../components/NotePanel/NotePanel";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Main,
  Header,
  MainTitle,
  NotesDetails,
  DashboardLayout,
} from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <Main>
        <Header>
          <MainTitle>All Notes</MainTitle>
          <nav>
            <input type="text" />
            settings
          </nav>
        </Header>
        <NotesDetails>
          <NotePanel />
          <NoteEditor />      {/* This needs to be show when Create New Note is clicked */}
          <NoteOptions />
        </NotesDetails>
      </Main>
    </DashboardLayout>
  );
};

export default Dashboard;
