import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { blogRef } from '../../../firebase';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import CardWine from '../shared/card/CardWine';
import Loading from '../loading/Loading';

const useBlogApi = (initData) => {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    setIsError(false);
    setIsLoading(true);

    blogRef
      .limitToLast(9)
      .orderByChild('createdAt')
      .once('value')
      .then(blogs => {
        let blogData = [];
        blogs.forEach(blog => {
          const { title, createdAt, description, image_url } = blog.val();
          blogData.push({
            id: blog.key,
            title,
            createdAt,
            description,
            image_url
          });
        });
        setData({ blogs: blogData });
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

const BlogPage = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useBlogApi({ blogs: [] });
  const renderError = () => <div>{t('NOTIFY.SOMETHING_WENT_WRONG')}</div>
  const renderItem = (data) => {
    return data.map(item => (
      <CardWine key={item.id} item={item} md={4} path={`/blog/${item.id}`} />
    ))
  }
  return (
    <Container>
      <section>
        <HeaderTitleMedium title="Blog" />
        <div className="row">
          {isError && renderError()}
          {isLoading ? <Loading /> : renderItem(data.blogs)}

        </div>
      </section>
    </Container>
  )
}

export default BlogPage;
