import * as React from 'react';
import { render } from 'react-dom';
import Article from "@/components/Artilce";
import Comment from "@/components/Comment";
import './index.less';
import { content, comments } from "-/articledata";


class detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-article">
        <Article
          title={'文章标题文章标题文章标题文章标题文章标题文章标题'}
          content={content} />
        <Comment
          total={2342}
          coments={[...comments]}/>
      </div>
    );
  }
}

export default detail
