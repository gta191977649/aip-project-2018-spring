FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=react-build /app/build /usr/share/nginx/html -- Not needed anymore
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]