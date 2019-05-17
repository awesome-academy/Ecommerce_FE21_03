import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../loading/Loading';
import { useTranslation } from 'react-i18next';
import { blogRef } from '../../../firebase';
import { HeaderTitleMedium } from '../shared/header-title';
import BlogDetailRight from './components/Right';
import BlogDetailContent from './components/Content';

let blogId = null;

const BlogDetailComment = Loadable({
  loader: () => import('./components/Comment'),
  loading: Loading,
});

const useBlogPostApi = (initData) => {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    setIsError(false);
    setIsLoading(true);

    blogRef
      .child(blogId)
      .once('value')
      .then(blog => {
        const { content, title, description, image_url } = blog.val();
        let blogData = {
          id: blog.key,
          content,
          title,
          description,
          image_url
        }
        setData(blogData);
        setIsLoading(false);
      }).catch(() => {
        setIsError(true)
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}

const BlogDetail = ({ match }) => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useBlogPostApi([]);
  blogId = match.params.id;

  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>

  return (
    <div className="container">
      <HeaderTitleMedium title="Blog" />
      <div className="blog">
        <BlogDetailRight>
          {isError && renderError()}
          {isLoading ? <Loading /> : <BlogDetailContent item={data} />}
          <BlogDetailComment />
        </BlogDetailRight>
      </div>
    </div>
  )
}

export default withRouter(BlogDetail);
