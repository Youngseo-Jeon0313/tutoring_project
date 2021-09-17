import {React} from 'react';
import EditorTemplate from './EditorTemplate';
import "./index.css";

function TeacherPage() {

      return (
       <div>
         <EditorTemplate homework="숙제" board="칠판" ></EditorTemplate>
        </div>
      );
  
  }

export default TeacherPage;