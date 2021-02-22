import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { TabWrapper, TabList } from './tab.styled';

/*
  sample format
  const tabList = {
    header: [{title: '', path: '', active: false}],
    content: [{title: '', path: '', exact: true}]
  }
*/

const Tabs = (props) => {
  const { match, tabList } = props;
  let { url } = match;
  const [listContent, setListContent] = useState(tabList);

  useEffect(() => {
    setListContent({
      ...listContent,
      header: listContent.header.map((item) => {
        item.active = item.path === url;
        return item;
      }),
    });
  }, [url]);

  const onTabClick = useCallback(
    (tab) => {
      setListContent({
        ...listContent,
        header: listContent.header.map((item) => {
          item.active = item.path === tab.path;
          return item;
        }),
      });
    },
    [listContent]
  );

  return (
    <div>
      <TabWrapper>
        {listContent.header &&
          listContent.header.map((item, index) => (
            <TabList key={index} isActive={item.active}>
              <Link
                to={`${item.path}`}
                onClick={() => onTabClick(item)}
                className="tab-list-link"
              >
                {item.title}
              </Link>
            </TabList>
          ))}
      </TabWrapper>
      <Switch>
        {listContent.content &&
          listContent.content.map((item, index) => {
            return (
              <Route
                key={index}
                exact={item.exact || false}
                path={`${item.path}`}
                render={(renderProps) => {
                  const newProps = { ...renderProps, ...props };
                  return <item.renderComponent {...newProps} />;
                }}
              />
            );
          })}
      </Switch>
    </div>
  );
};

export default Tabs;
