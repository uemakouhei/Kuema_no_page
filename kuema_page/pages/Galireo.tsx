import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownToJSX from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';

interface GalileoProps {
  bioContent: string;
}

const Galileo: React.FC<GalileoProps> = ({ bioContent }) => {
  return (
    <div>
        <Typography variant='h2'> Galileo Galilei</Typography>
      <h1>ガリレオ・ガリレイ</h1>
      <MarkdownToJSX>{bioContent}</MarkdownToJSX>
      <Link href=".">もどる</Link>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'gbio.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return {
    props: {
      bioContent: content,
    },
  };
}

export default Galileo;
