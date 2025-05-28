import { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import ArchiveIcon from "../../assets/images/icon-archive.svg";
import ArchiveIconBlue from "../../assets/images/icon-archive-blue.svg";
import HomeIcon from "../../assets/images/icon-home.svg";
import HomeIconBlue from "../../assets/images/icon-home-blue.svg";
import SidebarNavItem from "../SidebarNavItem/SidebarNavItem";
import useNotesStore from "../../store/notesStore";
import TagIcon from "../../assets/images/icon-tag.svg";
import Label from "../Label/Label";

const SidebarContainer = styled.section`
  padding: 0px 16px 12px 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  grid-column: 1/2;
  grid-row: 1/3;

  @media (max-width: 768px) {
    display: none; /* Hide Sidebar on tablet and mobile */
  }
`;

const LogoSyled = styled(Logo)`
  margin: 24px 0px 28px 0px;
`;

const NotesTagList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TopNav = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding-bottom: ${({ theme }) => theme.spacing[100]};
  margin-bottom: ${({ theme }) => theme.spacing[100]};
`;
const TagsTitle = styled.h4`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<string>("all-notes");
  const notes = useNotesStore((state) => state.notes);
  const getAllTags = useNotesStore((state) => state.getAllTags);

  const handleNavItem = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <SidebarContainer>
      <aside className="side-navigation">
        <LogoSyled />
        <nav>
          <TopNav>
            <SidebarNavItem
              IconActive={HomeIconBlue}
              IconInactive={HomeIcon}
              text="All Notes"
              isActive={activeTab === "all-notes"}
              onClick={() => handleNavItem("all-notes")}
            />
            <SidebarNavItem
              IconActive={ArchiveIconBlue}
              IconInactive={ArchiveIcon}
              text="Archived Notes"
              isActive={activeTab === "archived-notes"}
              onClick={() => handleNavItem("archived-notes")}
            />
          </TopNav>
          {notes.length ? (
            <NotesTagList>
              <TagsTitle>Tags</TagsTitle>
              {getAllTags().map((tag) => (
                <Label text={tag} Icon={TagIcon} size="md" />
              ))}
            </NotesTagList>
          ) : null}
        </nav>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
