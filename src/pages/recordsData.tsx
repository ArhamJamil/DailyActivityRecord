import RecordTable from '@/components/RecordTable'
import React from 'react'

import Link from 'next/link';
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DataModal from '@/components/DataModal';
import Edit from './Edit';




const recordsData = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <RecordTable editRecordDialog={
        <Edit></Edit>
      } >
      </RecordTable>

    </div>
  )
}

export default recordsData