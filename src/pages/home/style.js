import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
    // background:red;
`;
export const HomeLeft = styled.div`
    // border: 1px solid;  
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img {
        width:100%;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    border-bottom:1px solid #DCDCDC;
`;
export const TopicItem = styled.div`
    float:left;
    padding-right:10px;
    background:#F7F7F7;
    line-height:32px;
    margin-right:18px;
    margin-bottom:18px;
    height:32px;
    border: 1px solid #DCDCDC;
    border-radius:4px;
    font-size:14px;
    .topicItemImg{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ArticlesWrapper = styled.div`
    width:625px;
    float:left;
`;
export const Article = styled.div`
    overflow:hidden;
    padding: 20px 0;    
    border-bottom:1px solid #dcdcdc;
    width:625px;
    .listItemImg{
        display:block;
        float:right;
        width:90px;
        height:110px;
        margin-left:5px;
        border-radius:10px;
    }
`;
export const ArticleInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:22px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .summary{
        line-height:20px;
        font-size:14px;
        color:#999;
    }
`;

export const RecommandWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommandItem = styled.div`
    background: url(${(props) => props.imgUrl}); 
    background-size:contain;
    // background-repeat:no-repeat;  
    width:280px;
    height:50px;
`;

export const WriterWrapper = styled.div`
    width:278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    text-align:center;
    height:300px;
    line-height:300px;
`;
export const WriterItem = styled.div`
    background: url(${(props) => props.imgUrl}); 
    background-size:contain;
    // background-repeat:no-repeat;  
    width:280px;
    height:50px;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin: 30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    cursor:pointer;
    
`;
export const BackTop = styled.div`
    width:60px;
    height:60px;
    line-height:60px;
    font-size:10px;
    text-align:center;
    border: 1px solid;
    position:fixed;
    right:100px;
    bottom:100px;
`;