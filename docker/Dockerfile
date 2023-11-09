# docker build -t custom-vitess .

FROM vitess/vttestserver:mysql80@sha256:db0f79df9275b73054ca49d52bd77c204ebe8e354a547da0aa4af7c2ff955bb4

COPY ./vschema.sh /vt/setup_vschema_folder.sh
USER root
RUN chmod +x /vt/setup_vschema_folder.sh
USER vitess

COPY ./run.sh /vt/run.sh
USER root
RUN chmod +x /vt/run.sh
USER vitess